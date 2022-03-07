import { FC } from 'react';
import './button.scss';

interface Props {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
}

const Button: FC<Props> = ({ title, imgSrc, imgAlt }) => {
  const a = 5;
  return (
    <>
      <button className="button">
        {title}
        <img src={imgSrc} alt={imgAlt} className="button-image" />
      </button>
    </>
  );
};

export default Button;
