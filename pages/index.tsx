import { Nav, Main } from '@components';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="grid lg:grid-cols-5">
      <Nav />
      <main className="lg:col-span-4">
        <Main />
      </main>
    </Box>
  );
}
