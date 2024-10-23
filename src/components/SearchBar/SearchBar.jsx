import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Toaster } from 'react-hot-toast'
import { warning } from '../ErrorMessage/ErrorMessage'
import s from '../SearchBar/SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (values, actions) => {
        if (values.query === '') {
            warning();
            return;
        }
        onSearch(values.query);
        actions.resetForm()
    };

    return (
        <header>
            <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
                <Form className={s.form}>
                    <div className={s.container}>
                        <Field 
                        name='query'
                        type='text'
                        autoComplete='off'
                        autoFocus
                        placeholder='Search images and photos'
                        className={s.input}
                        />
                        <button type='submit' className={s.button}>Search</button>
                    </div>
                    <ErrorMessage 
                    type='text'
                    name='query'
                    component='p'
                    className={s.error}
                    />
                </Form>
            </Formik>
            <Toaster />
        </header>
    )
}

export default SearchBar