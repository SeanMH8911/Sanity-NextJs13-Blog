import {defineConfig, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import Logo from './components/Logo';
import StudioNav from './components/StudioNav';
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'Nextjs13 Blog',

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNav,
    }
  },
  theme: myTheme
})
