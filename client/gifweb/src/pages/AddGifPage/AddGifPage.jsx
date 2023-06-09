import { useForm } from 'react-hook-form';
import { useGif } from '../../hooks/useGif';
export const AddGifPage = () => {
    const { register, handleSubmit } = useForm();
    const { addGif } = useGif();
    const onSubmit = (data) => {
        addGif(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>url</label>
            <input type="text" {...register('item')} />

            <label>caption</label>
            <input type="text" {...register('caption')} />

            <button type="submit">Submit</button>
        </form>
    );
}
