import { useForm } from 'react-hook-form';

export const registerPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register('name')} />

      <label>Email</label>
      <input type="email" {...register('email')} />

      <button type="submit">Submit</button>
    </form>
  );
}
