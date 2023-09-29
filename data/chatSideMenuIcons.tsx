import {
  MdFileCopy,
  MdEditSquare,
  MdDriveFileMove,
  MdFolderDelete,
  MdFileOpen,
  MdDeleteForever,
  MdOutlineGridView,
  MdViewQuilt,
  MdOutlineDriveFileRenameOutline,
  MdSyncAlt,
  MdQueryStats,
} from 'react-icons/md'
import { FcPackage, FcSettings } from 'react-icons/fc'
import { BiNotepad } from 'react-icons/bi'
import { IoInvertMode, IoSearch } from 'react-icons/io5'
import { RiFileTextFill } from 'react-icons/ri'
import { SlRefresh } from 'react-icons/sl'
import { AiOutlineFolderView } from 'react-icons/ai'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export const chatSideMenuIcons = [
  {
    id: 1,
    icon: <MdQueryStats />,
    text: 'Usage',
    isSupport: true,
  },
  {
    id: 2,
    icon: <MdFileOpen />,
    text: 'Edit',
    isSupport: false,
  },
  {
    id: 3,
    icon: <MdEditSquare />,
    text: 'New',
    isSupport: false,
  },
  {
    id: 4,
    icon: <MdDriveFileMove />,
    text: 'Move',
    isSupport: false,
  },
  {
    id: 5,
    icon: <MdDeleteForever />,
    text: 'Delete',
    isSupport: false,
  },
  {
    id: 6,
    icon: <MdFolderDelete />,
    text: 'Empty',
    isSupport: false,
  },
  {
    id: 7,
    icon: <FcPackage />,
    text: 'Pack Files',
    isSupport: false,
  },
  {
    id: 8,
    icon: <FcSettings />,
    text: 'Settings',
    isSupport: true,
  },
  {
    id: 9,
    icon: <SlRefresh />,
    text: 'Reread Source',
    isSupport: false,
  },
  {
    id: 10,
    icon: <MdOutlineGridView />,
    text: 'File Names',
    isSupport: false,
  },
  {
    id: 11,
    icon: <MdViewQuilt />,
    text: 'All Files',
    isSupport: false,
  },
  {
    id: 12,
    icon: <AiOutlineFolderView />,
    text: 'Thumbnail',
    isSupport: false,
  },
  {
    id: 13,
    icon: <FaArrowAltCircleLeft />,
    text: 'Go Back',
    isSupport: false,
  },
  {
    id: 14,
    icon: <FaArrowAltCircleRight />,
    text: 'Go Forward',
    isSupport: false,
  },
  {
    id: 15,
    icon: <IoInvertMode />,
    text: 'Invert',
    isSupport: false,
  },
  {
    id: 16,
    icon: <IoSearch />,
    text: 'Search',
    isSupport: false,
  },
  {
    id: 17,
    icon: <MdOutlineDriveFileRenameOutline />,
    text: 'Rename Files',
    isSupport: false,
  },
  {
    id: 18,
    icon: <BiNotepad />,
    text: 'Notepad',
    isSupport: false,
  },
  {
    id: 19,
    icon: <MdSyncAlt />,
    text: 'Sync Dir',
    isSupport: false,
  },
  {
    id: 20,
    icon: <RiFileTextFill />,
    text: 'Copy Names',
    isSupport: false,
  },
]
