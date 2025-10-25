import { SlotsPattern } from '@/patterns/slotsPattern';
import { PostListWithData } from '@/patterns/hocPattern';
import { AdapterPattern } from '@/patterns/adapterPattern';
import { FunctionAsChild } from '@/patterns/functionAsChildPattern';
import { ProxyComponents } from '@/patterns/proxyComponentsPattern';
import { RenderPropsUseability } from '@/patterns/renderPropsPattern';
import { CompoundComponents } from '@/patterns/compoundComponentsPattern';

import '@/style.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      | ---------------------------------------------------------------------------------- |
      <RenderPropsUseability />
      | ---------------------------------------------------------------------------------- |
      <SlotsPattern />
      | ---------------------------------------------------------------------------------- |
      <CompoundComponents />
      | ---------------------------------------------------------------------------------- |
      <FunctionAsChild />
      | ---------------------------------------------------------------------------------- |
      <ProxyComponents />
      | ---------------------------------------------------------------------------------- |
      <PostListWithData />
      | ---------------------------------------------------------------------------------- |
      <AdapterPattern />
      | ---------------------------------------------------------------------------------- |
    </div>
  );
}

export default App;
