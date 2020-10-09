import React, { FC, ReactNode } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface InputProps {
  onSend: (text: string) => void;
  inputPlaceholder?: string;
  renderInput?: (props: any) => ReactNode;
  renderSend?: (props: any) => ReactNode;
}

export const Input: FC<InputProps> = ({ onSend, inputPlaceholder, renderInput, renderSend }) => {
  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: {
      messagingChatInput: '',
    },
  });

  const input = watch('messagingChatInput', '');

  const registerSend = register({
    required: true,
  });

  function send(data: any) {
    if (input.length > 0) {
      onSend(data.messagingChatInput);
      setValue('messagingChatInput', '');
    }
  }

  function _renderInput(): ReactNode {
    if (renderInput) {
      return renderInput({
        ref: registerSend,
        name: 'messagingChatInput',
        autoComplete: 'off',
        autoCorrect: 'off',
        spellCheck: 'off'
      });
    } else {
      return (
        <TextField
          fullWidth
          variant="outlined"
          inputRef={registerSend}
          name="messagingChatInput"
          label={inputPlaceholder || 'Type a message...'}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
      )
    }
  }

  function _renderSend(): ReactNode {
    if (input.length > 0) {
      if (renderSend) {
        return renderSend({
          type: 'submit'
        });
      } else {
        return (
          <IconButton type="submit">
            <Send />
          </IconButton>
        )
      }
    } else {
      return null;
    }
  }

  return (
    <Form onSubmit={handleSubmit(send)}>
      {_renderInput()}
      {_renderSend()}
    </Form>
  );
};

const Form = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
