import { Nav, Main, PrintView } from '@components';
import { Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function Home() {
  return (
    <>
      <Box className="screen-only grid lg:grid-cols-5">
        <Nav />
        <main className="lg:col-span-4">
          <Main />
        </main>

        <button
          type="button"
          onClick={() => window.print()}
          aria-label="Download CV as PDF"
          className="no-print sm:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#39ada9] px-5 py-3 text-white font-semibold shadow-lg hover:bg-[#2f8e8a]"
        >
          <DownloadIcon fontSize="small" />
          <span>PDF</span>
        </button>
      </Box>

      <PrintView />
    </>
  );
}
