interface Props {
  text: string;
}

const PageHeader = ({ text }: Props) => {
console.log("Rendering PageHeader with text:", text); // Verifica que el componente se está renderizando
return (
  <h1 style={{ color: 'black' }} className="text-5xl font-extrabold dark:text-white text-center">{ text }</h1>
);
}

export default PageHeader;
