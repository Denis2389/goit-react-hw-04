import toast from 'react-hot-toast'
import s from '../ErrorMessage/ErrorMessage.module.css'

export const warning = () => {
    toast.error('Please enter the search query', {
        duration: 2000,
    });
}

export const tryAgain = () => {
    toast.error('No result, try again!', {
        duration: 2000,
    });
}

export default function ErrorMessage() {
    <p className={s.text}>
        Ops.. Something wrong. Try to reload the page!
    </p>
}
