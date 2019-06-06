import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

// window.scrollTo not in node
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
