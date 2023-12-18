export function handleClickOutside(event: MouseEvent, callback: VoidFunction) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (selectArea.current && !selectArea.current.contains(event.target)) {
    callback();
  }
}
