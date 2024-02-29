import React, { useState, useCallback, useEffect } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import Output from "./Component/Output";

function App() {

  const [write_html, setWrite_html] = useState(localStorage.getItem('write_html') || '');
  const [write_css, setWrite_css] = useState(localStorage.getItem('write_css') || '');
  const [write_js, setWrite_js] = useState(localStorage.getItem('write_js') || '');


  const onChangeHtml = useCallback((value) => {
    setWrite_html(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setWrite_css(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setWrite_js(value);
  }, []);

  const srcCode = `
    <html>
      <body>${write_html}</body>
      <style>${write_css}</style>
      <script>${write_js}</script>
    </html>
  `;

  useEffect(() => {
    localStorage.setItem('write_html', write_html);
    localStorage.setItem('write_css', write_css);
    localStorage.setItem('write_js', write_js);
  }, [write_html, write_css, write_js]);

  return (
    <>
      <div className='p-3 mt-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
          <div className='bg-[rgb(51,40,52)] p-4 rounded-lg shadow-md'>
            <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold text-orange-400 mb-2'><i className="fa-brands fa-html5 mr-1"></i> HTML</h2>
            </div>
            <CodeMirror
              className="text-xl border-orange-400 border"
              value={write_html}
              height="300px"
              theme="dark"
              extensions={[html(true)]}
              onChange={(value) => onChangeHtml(value)}
            />
          </div>

          <div className='bg-[rgb(51,40,52)] p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold text-blue-400 mb-2'><i className="fa-brands fa-css3-alt mr-1"></i> CSS</h2>
            <CodeMirror
              className="text-xl border-blue-400 border"
              value={write_css}
              height="300px"
              theme="dark"
              extensions={[css(true)]}
              onChange={(value) => onChangeCss(value)}
            />
          </div>

          <div className='bg-[rgb(51,40,52)] p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold text-yellow-400 mb-2'><i className="fa-brands fa-js mr-1"></i> JavaScript</h2>
            <CodeMirror
              className="text-xl border-yellow-400 border"
              value={write_js}
              height="300px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={(value) => onChangeJavaScript(value)}
            />
          </div>
        </div>
      </div>

      <Output srcCode={srcCode} />
    </>
  );
}

export default App;
