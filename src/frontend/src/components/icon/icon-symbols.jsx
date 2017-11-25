import React from 'react'

const svgDefinitions = `
	<symbol id="s2-logo" viewBox="0 0 146.26 33.26">
		<path fill="currentColor" d="M4.8 19.71c-3.1 0-4.71-1.66-4.8-5 0-.17.06-.28.23-.31L2.6 14a.24.24 0 0 1 .31.24c.09 2 .68 2.82 2 2.82s1.81-.65 1.81-2.74S6.29 11.58 4.8 11l-1.16-.45C1 9.49.2 8.1.2 5.12.2 1.82 1.69 0 4.85 0S9.4 1.69 9.56 4.68c0 .17-.09.24-.24.31l-2.26.34c-.17 0-.31-.06-.31-.23-.05-1.58-.56-2.45-1.8-2.45S3.2 3.38 3.2 5c0 1.78.34 2.31 1.86 2.91l1.16.45c2.51 1 3.5 2.34 3.5 5.61-.01 3.77-1.28 5.74-4.92 5.74zM10.61.55a.27.27 0 0 1 .25-.28h2.49a.27.27 0 0 1 .28.28v18.63a.27.27 0 0 1-.25.28h-2.49a.27.27 0 0 1-.28-.28zm4.59 0a.27.27 0 0 1 .25-.28h3a.35.35 0 0 1 .39.28l3.55 13.26h.14V.55a.27.27 0 0 1 .25-.28H25a.27.27 0 0 1 .28.28v18.63a.27.27 0 0 1-.25.28h-2.88a.35.35 0 0 1-.39-.28L18 5.92h-.17v13.26a.27.27 0 0 1-.25.28h-2.09a.27.27 0 0 1-.28-.28zm11.61 0a.27.27 0 0 1 .25-.28h3a.35.35 0 0 1 .39.28L34 13.81h.14V.55a.27.27 0 0 1 .25-.28h2.14a.27.27 0 0 1 .28.28v18.63a.27.27 0 0 1-.25.28h-2.81a.35.35 0 0 1-.39-.28L29.63 5.92h-.17v13.26a.27.27 0 0 1-.25.28h-2.12a.27.27 0 0 1-.28-.28V.55zm11.59 0a.27.27 0 0 1 .25-.28h7.91a.27.27 0 0 1 .28.28v2.18a.27.27 0 0 1-.25.28h-5a.15.15 0 0 0-.17.17v5.04a.15.15 0 0 0 .13.17h4.33a.27.27 0 0 1 .28.28v2.17a.27.27 0 0 1-.25.28h-4.32a.15.15 0 0 0-.17.17v5.25a.15.15 0 0 0 .13.17h5a.27.27 0 0 1 .28.28v2.17a.27.27 0 0 1-.25.28h-7.89a.27.27 0 0 1-.28-.28zm17.19 18.91a.29.29 0 0 1-.31-.2l-2.34-7.65H51.5a.15.15 0 0 0-.17.17v7.39a.27.27 0 0 1-.25.28H48.6a.27.27 0 0 1-.28-.28V.55a.27.27 0 0 1 .25-.28h3.9c3.41 0 5.47 1.49 5.47 5.7 0 2.51-.85 4.09-2.29 4.91l2.71 8.29c.06.14 0 .28-.14.28h-2.63zM54.91 6c0-2.26-.73-3-2.44-3h-1a.15.15 0 0 0-.17.17v5.59a.15.15 0 0 0 .13.17h1c1.75 0 2.48-.67 2.48-2.93zm9.03 13.71c-3.1 0-4.71-1.66-4.8-5 0-.17.06-.28.23-.31l2.37-.4a.24.24 0 0 1 .31.24c.09 2 .68 2.82 2 2.82s1.81-.65 1.81-2.74-.39-2.74-1.89-3.33l-1.16-.45c-2.65-1-3.44-2.44-3.44-5.42C59.34 1.82 60.84 0 64 0s4.54 1.69 4.71 4.68c0 .17-.09.24-.24.31l-2.26.34c-.17 0-.31-.06-.31-.23-.06-1.58-.57-2.45-1.81-2.45s-1.75.73-1.75 2.35c0 1.78.34 2.31 1.86 2.91l1.16.45c2.51 1 3.5 2.34 3.5 5.61-.01 3.77-1.28 5.74-4.92 5.74zM70 9.87c0-5.33.11-6.12.37-6.91A4.12 4.12 0 0 1 74.69 0c2.74 0 4.46 1.41 4.63 4.6 0 .17 0 .31-.2.34l-2.29.39a.24.24 0 0 1-.31-.24c-.09-1.64-.65-2.34-1.75-2.34a1.41 1.41 0 0 0-1.52 1.07c-.14.45-.2.85-.2 6s.06 5.59.2 6A1.41 1.41 0 0 0 74.78 17c1.1 0 1.66-.7 1.75-2.34a.24.24 0 0 1 .23-.25h.08l2.29.39c.17 0 .23.17.2.34-.17 3.19-1.89 4.6-4.63 4.6a4.13 4.13 0 0 1-4.34-2.93C70.09 16 70 15.19 70 9.87zM81 .55a.27.27 0 0 1 .2-.28h2.49a.27.27 0 0 1 .31.28v7.56a.15.15 0 0 0 .13.17h3.29a.15.15 0 0 0 .17-.17V.55a.27.27 0 0 1 .21-.28h2.48a.27.27 0 0 1 .28.28v18.63a.27.27 0 0 1-.25.28h-2.46a.27.27 0 0 1-.28-.28v-8a.15.15 0 0 0-.13-.17h-3.3a.15.15 0 0 0-.17.17v8a.27.27 0 0 1-.25.28h-2.48a.27.27 0 0 1-.28-.28zm18.44 18.91a.29.29 0 0 1-.31-.2l-2.34-7.65h-1.44a.15.15 0 0 0-.17.17v7.39a.27.27 0 0 1-.25.28h-2.49a.27.27 0 0 1-.28-.28V.55a.27.27 0 0 1 .24-.28h3.9c3.41 0 5.47 1.49 5.47 5.7 0 2.51-.85 4.09-2.29 4.91l2.71 8.29c.06.14 0 .28-.14.28h-2.61zM98.76 6c0-2.26-.73-3-2.44-3h-1a.15.15 0 0 0-.17.17v5.59a.15.15 0 0 0 .13.17h1c1.72 0 2.48-.67 2.48-2.93zm8.41-5.45c.06-.17.14-.28.31-.28h2.37a.31.31 0 0 1 .31.28l4.06 18.62a.22.22 0 0 1-.14.27h-2.49a.29.29 0 0 1-.31-.27l-.76-3.87h-3.81l-.71 3.88a.29.29 0 0 1-.3.28h-2.41a.22.22 0 0 1-.23-.28zM110 12.77l-1.36-7.14h-.09l-1.41 7.14zM115.21.55a.27.27 0 0 1 .25-.28h4.46c2.51 0 4 1 4.66 3.08.34 1 .49 2.34.49 6.52s-.14 5.48-.49 6.52c-.68 2.06-2.15 3.08-4.66 3.08h-4.43a.27.27 0 0 1-.28-.28zm3.19 16.17h1.22a1.89 1.89 0 0 0 2-1.38c.23-.7.34-1.64.34-5.48s-.11-4.77-.34-5.48a1.89 1.89 0 0 0-2-1.38h-1.22a.15.15 0 0 0-.17.17v13.38a.15.15 0 0 0 .12.17zM126.3.55a.27.27 0 0 1 .25-.28h7.91a.27.27 0 0 1 .28.28v2.18a.27.27 0 0 1-.25.28h-5a.15.15 0 0 0-.17.17v5.04a.15.15 0 0 0 .13.17h4.33a.27.27 0 0 1 .28.28v2.17a.27.27 0 0 1-.25.28h-4.32a.15.15 0 0 0-.17.17v5.25a.15.15 0 0 0 .13.17h5a.27.27 0 0 1 .28.28v2.17a.27.27 0 0 1-.25.28h-7.91a.27.27 0 0 1-.28-.28zm17.18 18.91a.29.29 0 0 1-.31-.2l-2.34-7.65h-1.44a.15.15 0 0 0-.17.17v7.39a.27.27 0 0 1-.25.28h-2.49a.27.27 0 0 1-.28-.28V.55a.27.27 0 0 1 .25-.28h3.9c3.41 0 5.47 1.49 5.47 5.7 0 2.51-.85 4.09-2.29 4.91l2.71 8.29c.06.14 0 .28-.14.28h-2.62zM142.8 6c0-2.26-.73-3-2.44-3h-1a.15.15 0 0 0-.17.17v5.59a.15.15 0 0 0 .13.17h1c1.75 0 2.48-.67 2.48-2.93zM0 25.16h2.27c1.53 0 2.79.67 2.79 2.34 0 1.71-1.27 2.36-2.79 2.36H1v3.25H0zm2.34 4c1.14 0 1.76-.56 1.76-1.59 0-1.13-.67-1.55-1.76-1.55H1v3.18zm3.47 2.37c0-1.35 1.43-1.81 2.93-1.81h.84v-.42c0-.93-.36-1.32-1.25-1.32S7.07 28.31 7 29h-.94a2 2 0 0 1 2.31-1.8 1.88 1.88 0 0 1 2.13 2.09v3.85h-.92v-.73a2.11 2.11 0 0 1-1.82.84c-1.09 0-1.95-.52-1.95-1.72zm3.77-.42v-.73h-.8c-1.17 0-2 .29-2 1.15 0 .6.29 1 1.11 1 1 0 1.73-.48 1.73-1.39zm2.67-3.8h.93v1a2 2 0 0 1 1.92-1.15v.87c-1.17.06-1.92.42-1.92 1.86v3.21h-.93zm4.38 4.38v-3.6h-.84v-.78h.84V26h.93v1.33h1.36v.78h-1.37v3.49c0 .57.26.85.73.85a1.91 1.91 0 0 0 .71-.12v.78a2.21 2.21 0 0 1-.79.12 1.42 1.42 0 0 1-1.57-1.54zm6.13-1.41v-.09a2.87 2.87 0 1 1 5.74 0v.09a2.87 2.87 0 1 1-5.74 0zm4.78 0v-.08c0-1.35-.75-2.22-1.91-2.22a2 2 0 0 0-1.91 2.21v.09a1.93 1.93 0 1 0 3.82 0zm2.53-2.19h-.84v-.78h.84v-1c0-1.18.58-1.88 1.74-1.88a1.88 1.88 0 0 1 .69.11v.78a1.82 1.82 0 0 0-.66-.12c-.6 0-.85.41-.85 1v1.05h1.43v.78H31v5.06h-.93zm8.68-2.93H40l2.7 8h-1l-.7-2.31h-3.31l-.77 2.3H36zM38 30.08h2.77L39.34 26zm5.38.21v-.09a2.84 2.84 0 0 1 2.84-3 2.29 2.29 0 0 1 2.54 2h-.92a1.46 1.46 0 0 0-1.62-1.2 2 2 0 0 0-1.88 2.22v.09c0 1.43.78 2.19 1.91 2.19a1.59 1.59 0 0 0 1.68-1.43h.86a2.43 2.43 0 0 1-2.55 2.19 2.77 2.77 0 0 1-2.86-2.97zm6.29 0v-.09a2.84 2.84 0 0 1 2.84-3 2.29 2.29 0 0 1 2.54 2h-.92a1.46 1.46 0 0 0-1.62-1.2 2 2 0 0 0-1.88 2.22v.09c0 1.43.78 2.19 1.91 2.19a1.59 1.59 0 0 0 1.68-1.43h.86a2.43 2.43 0 0 1-2.55 2.19 2.77 2.77 0 0 1-2.86-2.97zm6.33 0v-.09a2.75 2.75 0 0 1 2.74-3c1.35 0 2.63.82 2.63 2.91v.3h-4.4c0 1.33.68 2.07 1.88 2.07.9 0 1.43-.34 1.55-1h.92a2.25 2.25 0 0 1-2.49 1.79A2.75 2.75 0 0 1 56 30.29zm4.41-.63c-.12-1.21-.75-1.66-1.71-1.66a1.74 1.74 0 0 0-1.7 1.67zm2.26-2.35h.93v.93a2 2 0 0 1 1.88-1c1.22 0 2.06.66 2.06 2.36v3.59h-.94v-3.7c0-1-.44-1.49-1.37-1.49a1.54 1.54 0 0 0-1.63 1.6v3.54h-.93zm6.8 4.38v-3.6h-.84v-.78h.84V26h.93v1.33h1.36v.78H70.4v3.49c0 .57.26.85.73.85a1.91 1.91 0 0 0 .71-.12v.78a2.21 2.21 0 0 1-.79.12 1.42 1.42 0 0 1-1.58-1.54zM73.1 31v-3.7h.9V31c0 1 .44 1.49 1.35 1.49A1.54 1.54 0 0 0 77 31v-3.69h.93v5.85H77v-.93a2 2 0 0 1-1.86 1c-1.14.02-2.04-.61-2.04-2.23zm6.61-3.69h.93v1a2 2 0 0 1 1.92-1.15v.87c-1.17.06-1.92.42-1.92 1.86v3.21h-.93zm3.52 2.98v-.09a2.75 2.75 0 0 1 2.74-3c1.35 0 2.63.82 2.63 2.91v.3h-4.41c0 1.33.68 2.07 1.88 2.07.9 0 1.43-.34 1.55-1h.93a2.25 2.25 0 0 1-2.49 1.79 2.75 2.75 0 0 1-2.83-2.98zm4.41-.63C87.56 28.45 86.93 28 86 28a1.74 1.74 0 0 0-1.74 1.69zm5.3-4.5h1v8h-1zm2.9 2.15h.93v.93a2 2 0 0 1 1.88-1c1.21 0 2.06.66 2.06 2.36v3.59h-.93v-3.7c0-1-.44-1.49-1.37-1.49a1.54 1.54 0 0 0-1.63 1.6v3.54h-.93zm6.8 4.38v-3.6h-.84v-.78h.84V26h.93v1.33h1.36v.78h-1.36v3.49c0 .57.26.85.73.85a1.91 1.91 0 0 0 .71-.12v.78a2.21 2.21 0 0 1-.79.12 1.42 1.42 0 0 1-1.58-1.54zm3.25-1.4v-.09a2.75 2.75 0 0 1 2.74-3c1.35 0 2.63.82 2.63 2.91v.3h-4.39c0 1.33.68 2.07 1.88 2.07.9 0 1.43-.34 1.55-1h.93a2.25 2.25 0 0 1-2.49 1.79 2.75 2.75 0 0 1-2.85-2.98zm4.41-.63c-.09-1.22-.71-1.69-1.67-1.69a1.74 1.74 0 0 0-1.74 1.69zm2.29-2.35h.93v1a2 2 0 0 1 1.92-1.15v.87c-1.17.06-1.92.42-1.92 1.86v3.21h-.93zm3.59 4.22c0-1.35 1.43-1.81 2.93-1.81h.84v-.42c0-.93-.36-1.32-1.25-1.32s-1.25.33-1.34 1.05h-.93a2 2 0 0 1 2.31-1.82 1.88 1.88 0 0 1 2.13 2.09v3.85h-.93v-.73a2.11 2.11 0 0 1-1.82.84c-1.12-.01-1.94-.53-1.94-1.73zm3.77-.42v-.73h-.8c-1.17 0-2 .29-2 1.15 0 .6.29 1 1.11 1 1 0 1.73-.48 1.73-1.39zm2.23-.82v-.09a2.84 2.84 0 0 1 2.84-3 2.29 2.29 0 0 1 2.54 2h-.92A1.46 1.46 0 0 0 125 28a2 2 0 0 0-1.88 2.22v.09c0 1.43.78 2.19 1.91 2.19a1.58 1.58 0 0 0 1.67-1.43h.86a2.43 2.43 0 0 1-2.56 2.18 2.77 2.77 0 0 1-2.82-2.96zm6.93 1.4v-3.6h-.84v-.78h.84V26h.89v1.33h1.36v.78H130v3.49c0 .57.26.85.73.85a1.91 1.91 0 0 0 .71-.12v.78a2.21 2.21 0 0 1-.79.12 1.42 1.42 0 0 1-1.54-1.54zm3.54-6.21a.61.61 0 1 1 .61.61.61.61 0 0 1-.61-.61zm.17 1.83h.93v5.85h-.93zm2.08 0h1l1.73 4.9 1.71-4.9h1l-2.1 5.85H137zm5.95 2.98v-.09a2.75 2.75 0 0 1 2.74-3c1.35 0 2.63.82 2.63 2.91v.3h-4.4c0 1.33.68 2.07 1.88 2.07.9 0 1.43-.34 1.55-1h.93a2.25 2.25 0 0 1-2.49 1.79 2.75 2.75 0 0 1-2.84-2.98zm4.41-.63c-.09-1.22-.71-1.69-1.67-1.69a1.74 1.74 0 0 0-1.74 1.69z"/>
	</symbol>
	<symbol id="admin" viewBox="0 0 19 20">
		<path fill="currentColor" fill-rule="evenodd" d="M9.43 13.403a3.466 3.466 0 1 1 0-6.932 3.466 3.466 0 0 1 0 6.933zm7.45-2.563a.25.25 0 0 1-.055-.183c.034-.237.034-.477.034-.72s-.015-.48-.04-.717a.252.252 0 0 1 .053-.183l1.93-2.414a.254.254 0 0 0 .022-.286l-1.58-2.734a.255.255 0 0 0-.26-.126l-3.03.46a.25.25 0 0 1-.184-.046 7.49 7.49 0 0 0-1.282-.75.25.25 0 0 1-.13-.137L11.25.163A.254.254 0 0 0 11.01 0H7.85c-.106 0-.2.065-.238.163L6.52 2.953a.252.252 0 0 1-.134.138 7.468 7.468 0 0 0-1.374.79.25.25 0 0 1-.183.046l-2.956-.45a.255.255 0 0 0-.26.127L.036 6.337a.254.254 0 0 0 .023.286L1.907 8.94c.042.052.06.12.054.186-.03.27-.047.54-.05.81.003.27.02.54.05.81a.252.252 0 0 1-.054.185L.056 13.25a.254.254 0 0 0-.023.287l1.58 2.734a.254.254 0 0 0 .26.127l2.96-.46a.253.253 0 0 1 .186.046c.425.318.884.59 1.368.81.06.028.11.077.134.14l1.094 2.79a.254.254 0 0 0 .237.163h3.158c.105 0 .2-.065.238-.163l1.11-2.837a.253.253 0 0 1 .133-.137 7.464 7.464 0 0 0 1.29-.753.252.252 0 0 1 .185-.046l3.023.46a.255.255 0 0 0 .26-.127l1.58-2.734a.255.255 0 0 0-.023-.287L16.88 10.84z"/>
	</symbol>
	<symbol id="user" viewBox="0 0 20 20">
		<path fill="currentColor" fill-rule="evenodd" d="M15 12.5H5c-2.75 0-5 2.25-5 5V20h20v-2.5c0-2.75-2.25-5-5-5M10 10c2.75 0 5-2.25 5-5s-2.25-5-5-5-5 2.25-5 5 2.25 5 5 5"/>
	</symbol>
	<symbol id="search" viewBox="0 0 20 21">
		<g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M9.11 18.427c5.026 0 9.11-4.12 9.11-9.214C18.22 4.12 14.135 0 9.11 0 4.083 0 0 4.12 0 9.213c0 5.094 4.083 9.214 9.11 9.214zm0-2.44c-3.725 0-6.735-3.038-6.735-6.774 0-3.735 3.01-6.772 6.735-6.772 3.724 0 6.734 3.04 6.734 6.775 0 3.736-3.01 6.773-6.734 6.773z"/><path d="M14.4 16.722l3.567 3.715c.46.48 1.213.485 1.68.01a1.244 1.244 0 0 0 .01-1.724l-3.565-3.715a1.165 1.165 0 0 0-1.68-.012 1.244 1.244 0 0 0-.01 1.726z"/></g>
	</symbol>
	<symbol id="checkmark" viewBox="0 0 20 21">
		<path fill="currentColor" fill-rule="evenodd" d="M7.07 17.777c-.43 0-.843-.17-1.147-.478L.468 11.792A1.616 1.616 0 1 1 2.763 9.52l4.16 4.196L17.108.623a1.614 1.614 0 1 1 2.55 1.983L8.348 17.152a1.615 1.615 0 0 1-1.18.62l-.097.005z"/>
	</symbol>
	<symbol id="slack" viewBox="0 0 20 20">
		<path fill="currentColor" fill-rule="evenodd" d="M15.692 11.71l-1.295.432.448 1.344a1.038 1.038 0 0 1-.656 1.31.896.896 0 0 1-.353.05 1.067 1.067 0 0 1-.96-.705L12.43 12.8l-2.67.895.448 1.344a1.038 1.038 0 0 1-.656 1.31.9.9 0 0 1-.35.05 1.067 1.067 0 0 1-.96-.705l-.448-1.343-1.296.43a.893.893 0 0 1-.35.05 1.068 1.068 0 0 1-.96-.705 1.038 1.038 0 0 1 .655-1.31l1.295-.433-.863-2.574-1.296.432a.896.896 0 0 1-.352.048 1.067 1.067 0 0 1-.96-.704 1.038 1.038 0 0 1 .656-1.31L5.62 7.84 5.17 6.5a1.038 1.038 0 0 1 .657-1.31 1.038 1.038 0 0 1 1.31.655l.45 1.343 2.67-.895-.45-1.343a1.038 1.038 0 0 1 .657-1.31 1.038 1.038 0 0 1 1.31.655l.448 1.343 1.296-.432a1.038 1.038 0 0 1 1.31.656 1.038 1.038 0 0 1-.655 1.31l-1.295.432.863 2.574 1.297-.432a1.038 1.038 0 0 1 1.31.656 1.038 1.038 0 0 1-.655 1.31zm3.47-4.46C17.1.375 14.125-1.224 7.25.838.375 2.9-1.224 5.875.838 12.75c2.063 6.875 5.037 8.474 11.912 6.412 6.875-2.063 8.474-5.037 6.412-11.912zM8.234 9.175l2.668-.894.863 2.578-2.668.894-.863-2.577z"/>
	</symbol>
	<symbol id="logged-in" viewBox="0 0 21 20">
		<path fill="currentColor" fill-rule="evenodd" d="M2.04 5.406a3.417 3.417 0 0 1 3.41-3.414 3.417 3.417 0 0 1 3.414 3.41v3.01c0 .396.323.718.72.718h.554a.72.72 0 0 0 .72-.72l-.002-3.008A5.41 5.41 0 0 0 5.45 0 5.41 5.41 0 0 0 .046 5.407V8.41c0 .398.323.72.72.72h.554a.72.72 0 0 0 .72-.72V5.406zm11.412 9.982l.28 1.842c0 .234-.348.75-.774.75h-.65c-.425 0-.77-.515-.77-.75l.277-1.84c-.748-.46-1.054-1.515-.37-2.38.272-.34.697-.524 1.133-.524h.006c.616 0 1.203.332 1.464.89a1.566 1.566 0 0 1-.596 2.012zm6.81-3.755a1.853 1.853 0 0 0-1.855-1.855l-11.552.004A1.86 1.86 0 0 0 5 11.64l.004 6.504C5.004 19.17 5.836 20 6.86 20l11.55-.007a1.856 1.856 0 0 0 1.857-1.855l-.005-6.505z"/>
	</symbol>
	<symbol id="edit" viewBox="0 0 20 20">
		<path fill="currentColor" fill-rule="evenodd" d="M1.2 14.206L0 20l5.794-1.2L16.377 8.22l-4.595-4.596zM15.405 0L13.09 2.314l4.596 4.595L20 4.594z"/>
	</symbol>
	<symbol id="skill-tooltip" viewBox="0 0 18 19">
		<g fill="none" fill-rule="evenodd"><path fill="#4502DA" d="M12.243 15H18V0H0v15h5.757L9 18.243 12.243 15z"/><path stroke="#FFF" d="M4 10.5h10m-7-2h7m-4-2h4m-1-2h1"/></g>
	</symbol>
	<symbol id="will-tooltip" viewBox="0 0 18 19">
		<g fill="none" fill-rule="evenodd"><path fill="#03FFB7" d="M12.243 15H18V0H0v15h5.757L9 18.243 12.243 15z"/><path stroke="#4502DA" d="M4 4.5h10.5M4 6.5h7.5M4 8.5h4.5m-4.5 2h1.5"/></g>
	</symbol>
	<symbol id="cross" viewBox="0 0 22 22">
		<path d="M1.91 20.09L20.09 1.91m0 18.18L1.91 1.91" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
	</symbol>
	<symbol id="location" viewBox="0 0 21 30">
		<path fill="currentColor" fill-rule="evenodd" d="M10.485 16.5a5.997 5.997 0 0 1-5.99-6c0-3.313 2.682-6 5.99-6a5.997 5.997 0 0 1 5.992 6c0 3.313-2.683 6-5.992 6m0-16.5C4.695 0 0 4.7 0 10.5 0 19.5 10.485 30 10.485 30S20.97 19.5 20.97 10.5C20.97 4.7 16.278 0 10.486 0"/>
	</symbol>
	<symbol id="mail" viewBox="0 0 30 21">
		<path fill="currentColor" fill-rule="evenodd" d="M2 3.15c.046.016.09.034.132.055L15 9.675l12.617-6.467c.116-.058.247-.097.383-.12v1.527L15.64 10.95a1.506 1.506 0 0 1-1.27 0L2 4.73V3.15zM29 .146H1c-.552 0-1 .407-1 .91v18.18c0 .503.448.91 1 .91h28c.552 0 1-.407 1-.91V1.057c0-.503-.448-.91-1-.91z"/>
	</symbol>
	<symbol id="plus" viewBox="0 0 23 23">
		<path d="M1.858 11.5h19.284M11.5 21.142V1.858" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
	</symbol>
	<symbol id="chevron" viewBox="0 0 8 13">
		<path fill="currentColor" d="M2.904 6.49l4.27-4.272L5.762.803.076 6.49l5.707 5.708 1.415-1.415z"/>
	</symbol>
`

const IconSymbols = () => (
	<svg
		style={{ display: 'none' }}
		dangerouslySetInnerHTML={{ __html: svgDefinitions }}
	/>
)

export default IconSymbols