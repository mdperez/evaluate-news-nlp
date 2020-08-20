import { checkFormat } from './js/formatChecker';
import { handleSubmit } from './js/formHandler';
import { updateUI, cleanResults } from './js/interfaceUpdater';
import { sendError, cleanErrors } from './js/errorHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/errorMessages.scss';

export {
  checkFormat,
  handleSubmit,
  updateUI,
  cleanResults,
  sendError,
  cleanErrors
}