import { motion } from 'framer-motion';
import React from 'react';

import { CategoryStyles } from '../../misc/types';
import Styled from './Telo.styles';

type ClothesItemProps = {
  src: string;
  styles: CategoryStyles;
  isSmoothSlide: boolean;
};

const ClothesItem: React.FC<ClothesItemProps> = ({
  src,
  styles,
  isSmoothSlide,
}) => {
  const animationVariants = {
    hidden: { opacity: isSmoothSlide ? 0 : 1, zIndex: styles?.zIndex || 1 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      key={src}
      variants={animationVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Styled.ClothesBaseImg src={src} $styles={styles} />
    </motion.div>
  );
};

export default ClothesItem;
