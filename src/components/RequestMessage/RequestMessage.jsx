import { MessageContainer, MessageTitle } from './RequestMessage.stylezed';

export default function ErrorMessage({ message }) {
  return (
    <MessageContainer role="alert">
      <MessageTitle>{message}</MessageTitle>
    </MessageContainer>
  );
}