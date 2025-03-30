<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline } from 'flowbite-svelte-icons';
  $: activeUrl = $page.url.pathname;
  
  // Add data for tooltips
  const menuItems = [
    { label: "Content Writing", href: "/", icon: ChartPieSolid },
    { label: "AI Framework Development", href: "/docs/components/accordion", icon: GridSolid },
    { label: "Software Development", href: "/docs/components/alert", icon: MailBoxSolid }
  ];
</script>

<aside class="sidebar">
  <div class="icon-container">
    <div class="icon icon-1">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-148.48 -148.48 808.96 808.96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#027EA8;" points="334.296,512 6.368,512 6.368,0 334.296,0 334.296,272.007 318.493,272.007 318.493,15.802 22.171,15.802 22.171,496.198 318.493,496.198 318.493,336.032 334.296,336.032 "></polygon> <polyline style="fill:#E6E6E6;" points="102.305,336.032 102.305,504.1 14.27,504.1 14.27,7.901 102.305,7.901 102.305,272.006 "></polyline> <rect x="70.542" y="72.657" width="104.213" height="15.632"></rect> <rect x="229.987" y="39.31" style="fill:#045A71;" width="15.632" height="15.632"></rect> <rect x="253.956" y="39.31" style="fill:#84DCCF;" width="16.674" height="15.632"></rect> <rect x="278.967" y="39.31" style="fill:#045A71;" width="15.632" height="15.632"></rect> <rect x="70.542" y="103.921" style="fill:#84DCCF;" width="32.306" height="15.632"></rect> <rect x="70.542" y="151.859" style="fill:#027EA8;" width="87.539" height="15.632"></rect> <rect x="174.755" y="151.859" width="47.938" height="15.632"></rect> <rect x="70.542" y="184.165" width="119.845" height="15.632"></rect> <rect x="206.018" y="184.165" style="fill:#027EA8;" width="57.317" height="15.632"></rect> <rect x="70.542" y="216.471" width="32.306" height="15.632"></rect> <rect x="118.48" y="216.471" style="fill:#027EA8;" width="111.508" height="15.632"></rect> <rect x="70.542" y="247.735" style="fill:#84DCCF;" width="192.794" height="15.632"></rect> <rect x="70.542" y="280.041" width="71.907" height="15.632"></rect> <rect x="158.08" y="280.041" style="fill:#0071BC;" width="16.674" height="15.632"></rect> <g> <rect x="70.542" y="312.347" style="fill:#84DCCF;" width="159.446" height="15.632"></rect> <rect x="70.542" y="399.886" style="fill:#84DCCF;" width="55.233" height="15.632"></rect> </g> <rect x="70.542" y="343.611" style="fill:#027EA8;" width="39.601" height="15.632"></rect> <path style="fill:#FBB03B;" d="M481.735,172.973l11.319-11.319c6.251-6.251,6.251-16.385,0-22.636l0,0 c-6.251-6.251-16.385-6.251-22.636,0l-11.319,11.319"></path> <g> <polyline style="fill:#F14507;" points="357.235,252.199 442.122,167.313 464.758,189.95 379.872,274.837 "></polyline> <polyline style="fill:#F14507;" points="311.962,342.746 294.985,359.723 261.03,382.359 249.712,371.042 272.349,337.086 289.326,320.109 "></polyline> </g> <rect x="310.589" y="249.455" transform="matrix(0.7071 0.7071 -0.7071 0.7071 308.3488 -149.469)" style="fill:#FBB03B;" width="48.021" height="96.042"></rect> <path d="M498.641,133.431c-9.321-9.322-24.489-9.321-33.81-0.001l-5.732,5.732l-16.977-16.977l-62.178,62.179l11.175,11.174 l51.003-51.004l45.345,45.345l11.175-11.174l-5.732-5.732l5.732-5.732C507.962,157.919,507.962,142.752,498.641,133.431z M487.466,156.067l-5.731,5.732l-11.462-11.462l5.732-5.732c3.159-3.16,8.303-3.16,11.461,0 C490.627,147.764,490.627,152.906,487.466,156.067z"></path> <path d="M442.122,156.139l-84.887,84.887l-5.659-5.659l-17.281,17.281V0H6.368v512h327.928V342.904l62.409-62.409l-5.659-5.659 l84.888-84.887L442.122,156.139z M318.493,496.198H22.171V15.802h296.322V268.45l-46,46l5.659,5.659l-11.944,11.944l-26.664,39.995 l4.652,4.652l-11.39,11.39l11.175,11.174l11.39-11.39l4.653,4.653l39.995-26.663l11.944-11.944l5.66,5.66l0.871-0.871 L318.493,496.198L318.493,496.198z M289.326,331.282l11.462,11.462l-10.837,10.837l-27.914,18.61l-2.158-2.158l18.609-27.913 L289.326,331.282z M318.821,336.032h-0.328v0.327l-0.871,0.871L294.84,314.45l56.736-56.736l22.781,22.781L318.821,336.032z M379.872,263.662l-11.462-11.462l73.713-73.713l11.462,11.462L379.872,263.662z"></path> <polygon style="fill:#027EA8;" points="225.123,415.519 183.095,415.519 183.095,399.887 219.583,399.887 228.191,392.907 238.037,405.049 "></polygon> </g></svg>
      
    </div>
    <span class="label">Content Writing</span>
      <div class="tooltip">Content Writing</div>
  </div>
  
  <div class="icon-container">
    <div class="icon icon-2">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-209.92 -209.92 931.84 931.84" xml:space="preserve" stroke="#000000" stroke-width="0.00512" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M434.863,126.093V77.137h-48.956V0h-33.391v77.137h-42.083V0h-33.391v77.137h-42.083V0h-33.391v77.137h-42.083V0h-33.391 v77.137H77.137v48.956H0v33.391h77.137v42.083H0v33.391h77.137v42.083H0v33.391h77.137v42.083H0v33.391h77.137v48.956h48.956V512 h33.391v-77.137h42.083V512h33.391v-77.137h42.083V512h33.391v-77.137h42.083V512h33.391v-77.137h48.956v-48.956H512v-33.391 h-77.137v-42.083H512v-33.391h-77.137v-42.083H512v-33.391h-77.137v-42.083H512v-33.39H434.863z M375.773,282.469 c0,23.125-14.251,42.974-34.428,51.253c-1.38,26.928-23.721,48.411-50.986,48.411c-13.221,0-25.283-5.052-34.36-13.325 c-9.077,8.273-21.139,13.325-34.36,13.325c-27.265,0-49.606-21.483-50.986-48.411c-20.177-8.28-34.428-28.129-34.428-51.253 c0-9.366,2.351-18.428,6.742-26.478c-4.296-7.867-6.742-16.883-6.742-26.459c0-22.913,14.194-42.903,34.426-51.239 c1.373-26.935,23.718-48.426,50.987-48.426c13.221,0,25.283,5.052,34.36,13.325c9.077-8.273,21.139-13.325,34.36-13.325 c27.27,0,49.615,21.491,50.987,48.426c20.234,8.336,34.426,28.326,34.426,51.239c0,9.577-2.445,18.593-6.742,26.459 C373.423,264.042,375.773,273.104,375.773,282.469z"></path> </g> </g> <g> <g> <path d="M221.64,163.258c-9.739,0-17.664,7.924-17.664,17.664c0,7.327,4.606,13.978,11.461,16.549l-11.727,31.264 c-9.613-3.606-17.688-9.991-23.463-18.021c-6.38,3.879-10.631,10.911-10.631,18.817c0,12.127,9.866,21.993,21.992,21.993v33.391 c-7.773,0-15.174-1.617-21.895-4.521c-0.065,0.687-0.098,1.379-0.098,2.076c0,12.127,9.865,21.992,21.992,21.992 c6.29,0,12.081-2.57,16.308-7.237l24.749,22.417c-7.484,8.263-17.258,13.992-27.914,16.604 c2.215,7.227,8.947,12.497,16.889,12.497c9.74,0,17.664-7.924,17.664-17.664V180.922 C239.304,171.182,231.381,163.258,221.64,163.258z"></path> </g> </g> <g> <g> <path d="M320.391,284.915v-33.391c12.127,0,21.993-9.866,21.993-21.993c0-7.907-4.251-14.939-10.631-18.817 c-5.774,8.031-13.85,14.415-23.463,18.021l-11.727-31.264c6.855-2.571,11.461-9.222,11.461-16.549 c0-9.74-7.924-17.664-17.664-17.664c-9.74,0-17.664,7.924-17.664,17.664v150.156c0,9.74,7.924,17.664,17.664,17.664 c7.943,0,14.673-5.271,16.889-12.497c-10.656-2.612-20.43-8.341-27.914-16.604l24.749-22.417 c4.226,4.667,10.018,7.237,16.307,7.237c12.127,0,21.993-9.866,21.993-21.992c0-0.697-0.033-1.389-0.098-2.076 C335.565,283.297,328.164,284.915,320.391,284.915z"></path> </g> </g> </g></svg>
      
    </div>
    <span class="label">AI Framework Development</span>
      <div class="tooltip">AI Framework Development</div>
  </div>
  
  <div class="icon-container">
    <div class="icon icon-3">
      <svg viewBox="-7.5 -7.5 65.00 65.00" enable-background="new 0 0 50 50" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M46.8942,5.31252H3.10575c-1.16296,0-2.10577,0.94275-2.10577,2.10571V34.6894 c0,1.16296,0.94281,2.10571,2.10577,2.10571H46.8942c1.16302,0,2.10577-0.94275,2.10577-2.10571V7.41823 C48.99997,6.25526,48.05722,5.31252,46.8942,5.31252z" fill="#E7E3E6"></path> <rect fill="#656766" height="23.74885" width="42.6767" x="3.66171" y="7.83474"></rect> <g> <rect fill="#806292" height="11.87442" width="21.33945" x="24.99903" y="7.83476"></rect> </g> <g> <rect fill="#4E4C4D" height="11.87442" width="21.33945" x="24.99903" y="19.70918"></rect> </g> <g> <rect fill="#656766" height="11.87442" width="21.33945" x="3.66179" y="7.83476"></rect> </g> <g> <rect fill="#656766" height="11.87442" width="21.33945" x="3.66179" y="19.70918"></rect> </g> <g> <path d="M39.7464,13.51671l-1.22293-1.22293c-0.14081-0.14081-0.36892-0.14081-0.50973,0 c-0.14081,0.14081-0.14081,0.36892,0,0.50973l0.96806,0.96806l-0.96806,0.96806c-0.14081,0.14081-0.14081,0.36892,0,0.50973 c0.0704,0.07041,0.16263,0.10561,0.25486,0.10561c0.09223,0,0.18446-0.0352,0.25486-0.10561l1.22293-1.22293 C39.88721,13.88563,39.88721,13.65752,39.7464,13.51671z" fill="#FFFFFF"></path> </g> <g> <path d="M33.56346,12.29378c-0.14081-0.14081-0.36892-0.14081-0.50973,0l-1.22363,1.22293 c-0.06759,0.06759-0.10561,0.15911-0.10561,0.25486c0,0.09575,0.03802,0.18728,0.10561,0.25486l1.22363,1.22293 c0.0704,0.07041,0.16263,0.10561,0.25486,0.10561c0.09223,0,0.18446-0.0352,0.25486-0.10561 c0.14081-0.14081,0.14081-0.36892,0-0.50973l-0.96877-0.96806l0.96877-0.96806 C33.70427,12.6627,33.70427,12.43459,33.56346,12.29378z" fill="#FFFFFF"></path> </g> <g> <path d="M37.14424,11.12788c-0.17742-0.09012-0.39427-0.02042-0.48579,0.1563l-2.38179,4.64601 c-0.09082,0.17742-0.02042,0.39497,0.1563,0.48579c0.0528,0.02675,0.10913,0.03943,0.16475,0.03943 c0.13095,0,0.25698-0.07181,0.32104-0.19572l2.38179-4.64601C37.39136,11.43625,37.32096,11.2187,37.14424,11.12788z" fill="#FFFFFF"></path> </g> <g> <path d="M36.62082,22.39944h-6.43956c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047 h6.43956c0.19925,0,0.36047,0.16123,0.36047,0.36047S36.82007,22.39944,36.62082,22.39944z" fill="#85BD57"></path> </g> <g> <path d="M41.39532,22.39944h-2.88694c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16122-0.36047,0.36047-0.36047 h2.88694c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,22.39944,41.39532,22.39944z" fill="#E7E3E6"></path> </g> <g> <path d="M33.14917,24.20321h-2.96791c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047 h2.96791c0.19925,0,0.36047,0.16123,0.36047,0.36047S33.34842,24.20321,33.14917,24.20321z" fill="#E7E3E6"></path> </g> <g> <path d="M41.39532,24.20321h-6.35895c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16122-0.36047,0.36047-0.36047 h6.35895c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,24.20321,41.39532,24.20321z" fill="#53B1E2"></path> </g> <g> <path d="M31.26162,26.00698h-1.08036c-0.19925,0-0.36047-0.16123-0.36047-0.36047 c0-0.19924,0.16123-0.36047,0.36047-0.36047h1.08036c0.19925,0,0.36047,0.16123,0.36047,0.36047 C31.62209,25.84575,31.46087,26.00698,31.26162,26.00698z" fill="#BA8C5C"></path> </g> <g> <path d="M41.39532,26.00698h-8.24615c-0.19925,0-0.36047-0.16123-0.36047-0.36047 c0-0.19924,0.16123-0.36047,0.36047-0.36047h8.24615c0.19925,0,0.36047,0.16123,0.36047,0.36047 C41.75579,25.84575,41.59456,26.00698,41.39532,26.00698z" fill="#E7E3E6"></path> </g> <g> <path d="M36.32829,27.81075h-6.14703c-0.19925,0-0.36047-0.16123-0.36047-0.36047 c0-0.19924,0.16123-0.36047,0.36047-0.36047h6.14703c0.19925,0,0.36047,0.16123,0.36047,0.36047 C36.68877,27.64952,36.52754,27.81075,36.32829,27.81075z" fill="#FFC966"></path> </g> <g> <path d="M41.39532,27.81075h-3.17947c-0.19925,0-0.36047-0.16123-0.36047-0.36047 c0-0.19924,0.16123-0.36047,0.36047-0.36047h3.17947c0.19925,0,0.36047,0.16123,0.36047,0.36047 C41.75579,27.64952,41.59456,27.81075,41.39532,27.81075z" fill="#9A7CA8"></path> </g> <g> <path d="M33.40122,29.61381h-3.21996c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047 h3.21996c0.19925,0,0.36047,0.16123,0.36047,0.36047S33.60046,29.61381,33.40122,29.61381z" fill="#E7E3E6"></path> </g> <g> <path d="M41.39532,29.61381h-6.10655c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047 h6.10655c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,29.61381,41.39532,29.61381z" fill="#E7E3E6"></path> </g> <g> <path d="M7.38695,9.40017H5.81158c-0.6698,0-1.21283,0.54303-1.21283,1.21283v18.19232 c0,0.66986,0.54303,1.21283,1.21283,1.21283h1.57538c0.66986,0,1.21283-0.54297,1.21283-1.21283V10.613 C8.59978,9.9432,8.05681,9.40017,7.38695,9.40017z" fill="#4E4C4D"></path> <path d="M7.24993,10.2795H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127 c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127 C7.80242,10.52688,7.55504,10.2795,7.24993,10.2795z" fill="#D2D2D2"></path> <path d="M7.24993,13.57009H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127 c0,0.30518,0.24738,0.55261,0.55255,0.55261h1.30127c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30133 C7.80242,13.81746,7.55504,13.57009,7.24993,13.57009z" fill="#D2D2D2"></path> <path d="M7.24987,16.86068H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30133 c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127 C7.80242,17.10805,7.55504,16.86068,7.24987,16.86068z" fill="#D2D2D2"></path> <path d="M7.24993,20.15133H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127 c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127 C7.80242,20.3987,7.55504,20.15133,7.24993,20.15133z" fill="#D2D2D2"></path> <path d="M7.24993,23.44191H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127 c0,0.30518,0.24738,0.55261,0.55255,0.55261h1.30121c0.30518,0,0.55255-0.24744,0.55255-0.55261V23.9944 C7.80242,23.68929,7.55504,23.44191,7.24993,23.44191z" fill="#D2D2D2"></path> <path d="M7.24993,26.7325H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30133 c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30133 C7.80242,26.97988,7.55504,26.7325,7.24993,26.7325z" fill="#D2D2D2"></path> </g> <path d="M19.8386,28.34957l1.53751-1.53751c0.17083-0.17083,0.17083-0.4478,0-0.61863l-1.75513-1.75514 l1.58382-0.65605c0.48512-0.20094,0.42679-0.90604-0.08475-1.02453l-6.10993-1.41537 c-0.38898-0.09011-0.73776,0.25867-0.64765,0.64766l1.41606,6.11286c0.11843,0.51125,0.82297,0.56989,1.02429,0.08525 l0.66203-1.59369l1.75513,1.75514C19.3908,28.5204,19.66777,28.5204,19.8386,28.34957z" fill="#EC6E62"></path> <rect fill="#D2D2D2" height="4.33882" width="17.95184" x="16.02405" y="36.7951"></rect> <path d="M35.04778,41.13393H14.95216c-0.98129,0-1.77678,0.79549-1.77678,1.77678v0 c0,0.98129,0.79549,1.77678,1.77678,1.77678h20.09562c0.98129,0,1.77678-0.79549,1.77678-1.77678v0 C36.82456,41.92942,36.02907,41.13393,35.04778,41.13393z" fill="#E7E3E6"></path> </g> </g></svg>

    </div>
    <span class="label">Software Development</span>
      <div class="tooltip">Software Development</div>
  </div>
</aside>

<style>
  .sidebar {
    grid-area: sidebar;
    background-color: transparent;
    background: rgba(243, 244, 246, 0.1);
    width: 70px;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  /* Icon container styles */
  .icon-container {
    position: relative;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 0.5rem;
  }
  
  /* Icon styles */
  .icon {
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.25rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  /* Soft, elegant color scheme */
  .icon-1 {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.4);
  }
  
  .icon-2 {
    background: linear-gradient(135deg, #ff6b6b 0%, #ff9a9a 100%);
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
  }
  
  .icon-3 {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    box-shadow: 0 8px 20px rgba(56, 239, 125, 0.4);
  }
  
  /* Hover effects */
  .icon-container:hover .icon {
    transform: scale(1.1);
    filter: brightness(1.2) saturate(1.3);
  }
  
  /* Soft glow effect */
  .icon::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center, 
      rgba(255, 255, 255, 0.3) 0%, 
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .icon-container:hover .icon::after {
    opacity: 1;
  }
  
  /* Subtle animation */
  @keyframes subtle-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  .icon-container:hover .icon {
    animation: subtle-float 2s ease-in-out infinite;
  }
  
  /* Label styles */
  .label {
    margin-left: 12px;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    opacity: 0; /* Hidden by default */
    max-width: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  /* Tooltip styles */
  .tooltip {
    visibility: hidden;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: #1f2937;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    margin-left: 0.75rem;
    z-index: 10;
    pointer-events: none;
  }
  
  /* Add a tooltip arrow */
  .tooltip::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #1f2937 transparent transparent;
  }
  
  /* Small screen: show tooltip on hover */
  @media (max-width: 999px) {
    .icon-container:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
    
    .sidebar {
      width: 70px;
      align-items: center;
    }
    
    /* For mobile screens, position sidebar on the left edge */
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        left: -14px;
        top: 33%;
        transform: translateY(-50%);
        z-index: 100;
        padding: 1rem 0.5rem;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 74%;
      }
    }
  }
  
  /* Large screen: show labels instead of tooltips */
  @media (min-width: 1000px) {
    .sidebar {
      width: 250px;
      align-items: flex-start;
      gap: 20px;
    }
    
    .icon-container {
      padding-left: 16px;
    }
    
    .label {
      opacity: 1;
      max-width: 200px;
      transition: all 0.3s ease;
    }
    
    /* Hide tooltips on large screens */
    .tooltip {
      display: none;
    }
  }
</style>