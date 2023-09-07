import './style.css';
import * as _ from 'lodash';
import bom from './data/sourceData.json';

// const json0 = JSON.stringify(data, null, 2);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Naive-ui menu data generator</h1>
<p>
Please open console
</p>

<ul>
  <li><a href="#json1">Source data</a></li>
</ul>
<div id="json1">
<hr>
<h3>Source data</h3>
<a href="#">Top</a>
<pre>

</pre>
</div>

`;
