import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

import { ButtonDel, Item, Text, TextWrap } from './ContactItem.style';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handlerDeleteBtn = () => {
    dispatch(deleteContact(id));
    toast.success(`${name} deleted from your contacts list.`);
  };

  return (
    <>
      <Item>
        <TextWrap>
          <Text>{name}</Text>
          <Text>{phone}</Text>
        </TextWrap>
        <ButtonDel onClick={handlerDeleteBtn} type="button">
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
