import { Box, Text } from '@gluestack-ui/themed';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Container />
    </main>
  );
}

const Container = () => {
  return (
      <p style={{margin: 0}}>Hi there</p>
  );
};
