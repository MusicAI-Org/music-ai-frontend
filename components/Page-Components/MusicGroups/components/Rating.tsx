import React, { forwardRef, useState, RefObject } from "react";
import { Box, Icon, PseudoBox, Stack, Text } from "@chakra-ui/core";

interface RatingProps {
  size: number;
  icon: string;
  scale: number;
  fillColor: string;
  strokeColor: string;
}

const Rating = forwardRef<HTMLInputElement, RatingProps>(
  ({ size, icon, scale, fillColor, strokeColor }, ref) => {
    const [rating, setRating] = useState<number>(0);
    const buttons: JSX.Element[] = [];

    const onClick = (idx: number) => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    interface RatingIconProps {
      fill: boolean;
    }

    const RatingIcon = ({ fill }: RatingIconProps) => {
      return (
        <Icon
          name={icon}
          size={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={() => onClick(0)}
        />
      );
    };

    interface RatingButtonProps {
      idx: number;
      fill: boolean;
    }

    const RatingButton = ({ idx, fill }: RatingButtonProps) => {
      return (
        <PseudoBox
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </PseudoBox>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline mt={8} justify="center">
        <input
          name="rating"
          type="hidden"
          value={rating}
          ref={ref as RefObject<HTMLInputElement>}
        />
        {buttons}
        <Box width={`${size * 1.5}px`} textAlign="center">
          <Text fontSize="sm" textTransform="uppercase">
            Rating
          </Text>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="1.2em">
            {rating}
          </Text>
        </Box>
      </Stack>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
