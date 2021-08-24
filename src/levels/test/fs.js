import * as Terminal from 'javascript-terminal';

// File System Layout for Level 1
const customFileSystem = Terminal.FileSystem.create({
    '/fromCustomFS': { },
    '/home': { },
    '/home/README': {content: 'This is a text file', canModify: false},
    '/home/nested/directory/file': {content: 'End of nested directory!'}
  });
  
  export default customFileSystem;