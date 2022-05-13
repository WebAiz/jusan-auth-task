import {handleRoute} from './modules/routes';
import {handleLoginSubmit, handleRegisterSubmit} from './modules/forms';

// const root = document.querySelector('#root');

if (typeof window !== undefined) {
  handleRoute();
}

window.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.id === 'log-in') {
    handleLoginSubmit(e);
  }
  if (e.target.id === 'register') {
    handleRegisterSubmit(e);
  }
});
