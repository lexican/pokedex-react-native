import React from 'react';
import {
  FavouriteBadge,
  FavouriteBadgeTitle,
  TabIndicator,
  TabItem,
  TabTitle,
} from './HomeTabItem.style';

interface IProp {
  index: number;
  selectedIndex: number;
  title: string;
  onTabSelected: (index: number) => void;
}

export default function HomeTabItem({
  index,
  selectedIndex,
  onTabSelected,
  title,
}: IProp) {
  const active = index === selectedIndex;
  return (
    <TabItem
      activeOpacity={0.9}
      onPress={() => {
        onTabSelected(index);
      }}>
      <TabTitle active={active}>{title}</TabTitle>
      <FavouriteBadge showBadge={index === 1}>
        <FavouriteBadgeTitle>0</FavouriteBadgeTitle>
      </FavouriteBadge>
      <TabIndicator active={active} />
    </TabItem>
  );
}
