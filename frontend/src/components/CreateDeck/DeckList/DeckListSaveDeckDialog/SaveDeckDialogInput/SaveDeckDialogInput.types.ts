export interface IProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  handleSubmit: (event: React.FormEvent) => void;
}
