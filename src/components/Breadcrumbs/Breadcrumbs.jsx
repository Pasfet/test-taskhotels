import { memo } from 'react';
import { BreadcrumbsLeftText, BreadcrumbsRightText, BreadcrumbsWrapper } from './BreadcrumbsStyled';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ location, checkIn }) => {
  const normalizeDate = inputDate => {
    const date = inputDate.split('-').reverse();
    return date.join('.');
  };

  return (
    <BreadcrumbsWrapper>
      <BreadcrumbsLeftText>
        Отели <ChevronRightIcon />
        {location}
      </BreadcrumbsLeftText>
      <BreadcrumbsRightText>{normalizeDate(checkIn)}</BreadcrumbsRightText>
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  location: PropTypes.string,
  checkIn: PropTypes.string,
};

export default memo(Breadcrumbs);
