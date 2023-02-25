import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { Cell } from '../../state/cell';

const filesDirectory = path.join(process.cwd(), 'file.js');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await fs.readFile(filesDirectory, { encoding: 'utf-8' });
      res.status(201).json({ message: 'Cells', cells: JSON.parse(result) });
    } catch (error) {
      res.status(404).json({ message: 'Fetching data failed!' });
      return;
    }
  }

  if (req.method === 'POST') {
    try {
      const { cells }: { cells: Cell[] } = req.body;
      await fs.writeFile(filesDirectory, JSON.stringify(cells), 'utf-8');
      res.status(201).json({ message: 'save' });
    } catch (error) {
      res.status(500).json({ message: 'Saving cells failed!' });
      return;
    }
  }
};

export default handler;
