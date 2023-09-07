import './style.css';

import { h, ref, computed, watchEffect } from 'vue';
import { MenuOption } from 'naive-ui';

import * as _ from 'lodash';
import bomTree from './data/bomtree.json';

export interface Menu {
  id: string;
  label: string;
  icon?: string;
  type?: string;
  name?: string;
  description?: string;
  level: string;
  params?: { [key: string]: string };
  children?: Menu[];
}

const mapping = (items: Menu[]): MenuOption[] =>
  items.map((item) => ({
    ...item,
    key: item.id,
    label: item.name,
    // children: mapping(item),
  }));

// generazione
const options = bomTree ? mapping(bomTree) : [];

// menu data
const json1 = JSON.stringify(options, null, 2);
console.log(json1);

// API original data
const json0 = JSON.stringify(bomTree, null, 2);
console.log(json0);

const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `<h1>Naive-ui menu data generator</h1>
<p>Please open console</p>

<ul>
  <li><a href="#json1">Menu</a></li>
  <li><a href="#json0">API data</a></li>
</ul>

<hr>

<div id="json1">
<h3>Menu</h3>
<a href="#">Top</a>
<pre>
${json1}
</pre>
</div>

<div id="json0">
<h3>API data</h3>
<a href="#">Top</a>
<pre>
${json0}
</pre>
</div>

`;
