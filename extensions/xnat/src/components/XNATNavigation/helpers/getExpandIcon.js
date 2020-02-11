import React from 'react';
import { Icon } from '@ohif/ui';

export default function getExpandIcon() {
  if (this.state.expanded) {
    return <Icon name="chevron-down" />;
  }

  return <Icon name="plus" />;
}
