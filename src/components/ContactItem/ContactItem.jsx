import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

import { ButtonDel, Item, Text, TextWrap } from './ContactItem.style';
import { deleteContact } from 'redux/operations';
import { selectLoading } from 'redux/selectors';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handlerDeleteBtn = () => {
    dispatch(deleteContact({ id, name }));
  };

  return (
    <>
      <Item>
        <TextWrap>
          <Text>{name}</Text>
          <Text>{phone}</Text>
        </TextWrap>
        <ButtonDel
          disabled={loading && 'disabled'}
          onClick={handlerDeleteBtn}
          type="button"
        >
          <AiOutlineDelete />
        </ButtonDel>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
