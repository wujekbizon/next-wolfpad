import styles from './CodeCell.module.css';
import { useEffect } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import Resizable from '../Resizable/Resizable';
import { Cell } from '../../state/cell';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id]);

  return (
    <>
      <Resizable direction="vertical">
        <div className={styles.resizable_wrapper}>
          <Resizable direction="horizontal">
            <CodeEditor
              initialValue={cell.content}
              onChange={(value = '') =>
                updateCell({
                  id: cell.id,
                  content: value,
                })
              }
            />
          </Resizable>
          <div className={styles.progress_wrapper}>
            {!bundle || bundle.loading ? (
              <div className={styles.progress_cover}>
                <progress className={styles.progress} max="100">
                  Loading
                </progress>
              </div>
            ) : (
              <Preview code={bundle.code} error={bundle.err} />
            )}
          </div>
        </div>
      </Resizable>
    </>
  );
};
export default CodeCell;
