import { Form } from 'react-router-dom';
import Button from './Button';
import personIcon from '../assets/person.svg';
import emailIcon from '../assets/email.svg';

const FormInput = () => {
  return (
    <Form className="container mb-72">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 rounded-lg bg-light-slate py-10 dark:bg-light-navy">
        <label className="input input-bordered flex w-3/4 items-center gap-2 bg-white dark:bg-light-slate">
          <img src={personIcon} alt="person" className="size-8" />
          <input
            type="text"
            id="name"
            name="name"
            className="w-full grow text-xl text-light-navy"
            placeholder="Name"
            autoComplete="off"
          />
        </label>

        <label className="input input-bordered flex w-3/4 items-center gap-2 bg-white dark:bg-light-slate">
          <img src={emailIcon} alt="email" className="size-8" />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full grow text-xl text-light-navy"
            placeholder="Email"
            autoComplete="off"
          />
        </label>

        <textarea
          className="textarea textarea-bordered min-h-52 w-3/4 bg-white text-lg text-light-navy dark:bg-light-slate"
          placeholder="Message"
          id="message"
          name="message"
          autoComplete="off"
        ></textarea>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default FormInput;
