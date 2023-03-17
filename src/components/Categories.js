import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.categories.message);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="p-2">
      <span>{message}</span>
      <br />
      <button type="button" onClick={handleCheckStatus}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
