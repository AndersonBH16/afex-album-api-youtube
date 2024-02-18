   import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export function PopoverLinkValidate() {
    return (
    <Popover>
        <PopoverHandler>
          <Button>Popover</Button>
        </PopoverHandler>
        <PopoverContent>
          This is a very beautiful popover, show some love.
        </PopoverContent>
      </Popover>
    );
  }