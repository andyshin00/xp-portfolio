import InternetExplorer from './InternetExplorer';
import Credits from './Credits';
import ErrorBox from './ErrorBox';

import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import error from 'assets/windowsIcons/897(16x16).png';
import notepadIcon from 'assets/windowsIcons/327(32x32).png';
import mapleStoryIcon from 'assets/windowsIcons/maplestory.png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};

const genId = gen();
const genIndex = gen();

export const defaultAppState = [
  {
    component: InternetExplorer,
    header: {
      title: 'Internet Explorer',
      icon: iePaper,
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 130,
      y: 20,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: notepadIcon,
    title: 'Credits.txt',
    component: Credits,
    isFocus: false,
  },
  {
    id: 2,
    icon: mapleStoryIcon,
    title: 'MapleStory',
    component: ErrorBox,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'Internet Explorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  'Credits.txt': {
    header: {
      icon: notepadIcon,
      title: 'Credits.txt - Notepad',
    },
    component: Credits,
    defaultSize: {
      width: 520,
      height: 360,
    },
    defaultOffset: {
      x: 190,
      y: 80,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },

  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  MapleStory: {
    header: {
      icon: error,
      title: 'MapleStory',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
    injectProps: { message: 'MapleStory cannot be opened.' },
  },
};

export { InternetExplorer, Credits, ErrorBox };
