"use client"

import React, {useState} from "react";
import {Button, SelectPanel} from '@primer/react'
import {TriangleDownIcon} from "@primer/octicons-react";

type ItemInput = {
  id: number;
  text: string;
  description: string;
}

export default function Home() {
  return (
    <>
      <SelectorDemo />
    </>
  );
}


function SelectorDemo() {
  const items = [
    {text: 'enhancement', description: 'Something to enhancement', id: 1},
    {text: 'bug', description: `Something isn't working`, id: 2},
  ]

  const [selected, setSelected] = React.useState<ItemInput[]>([])
  const [filter, setFilter] = React.useState('')
  const filteredItems = items.filter((item) => item.text.toLowerCase().startsWith(filter.toLowerCase()))
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>Multi Select Panel</h1>
      <SelectPanel
        title="Select labels"
        subtitle="Use labels to organize issues and pull requests"
        renderAnchor={({
           children,
           'aria-labelledby': ariaLabelledBy,
           ...anchorProps
         }) => (
          <Button
            trailingAction={TriangleDownIcon}
            aria-labelledby={` ${ariaLabelledBy}`}
            {...anchorProps}
            aria-haspopup="dialog"
          >
            {children ?? 'Select Labels'}
          </Button>
        )}
        placeholderText="Filter labels"
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
        showItemDividers={true}
        overlayProps={{
          width: 'small',
          height: 'xsmall',
        }}
      />
    </>
  )
}
