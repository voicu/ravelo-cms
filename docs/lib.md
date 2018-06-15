## Members

<dl>
<dt><a href="#getEnv">getEnv</a></dt>
<dd><p>Expose functions to the module.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Registry">Registry</a></dt>
<dd><p>Define Registry module</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getEnv">getEnv()</a> ⇒ <code>String</code></dt>
<dd><p>Grabs the environment from the
NODE_ENV environment variable.
Valid environments are:</p>
<ul>
<li>production</li>
<li>development</li>
<li>test</li>
</ul>
<p>Throws an error if environment
value is invalid.</p>
</dd>
<dt><a href="#getConfig">getConfig(env)</a></dt>
<dd><p>Gets the configuration options
for the runtime environment.</p>
</dd>
</dl>

<a name="getEnv"></a>

## getEnv
Expose functions to the module.

**Kind**: global variable  
<a name="Registry"></a>

## Registry
Define Registry module

**Kind**: global constant  

* [Registry](#Registry)
    * [.pluginDirs](#Registry.pluginDirs)
    * [.controllerDirs](#Registry.controllerDirs)
    * [.modelDirs](#Registry.modelDirs)
    * [.subscribeControllers(server)](#Registry.subscribeControllers)
    * [.subscribePlugins(server)](#Registry.subscribePlugins)

<a name="Registry.pluginDirs"></a>

### Registry.pluginDirs
Define relative paths
to the plugin directory
starting by the repo
location.

**Kind**: static property of [<code>Registry</code>](#Registry)  
<a name="Registry.controllerDirs"></a>

### Registry.controllerDirs
Define relative paths
to the controller directory
starting by the repo
location.

**Kind**: static property of [<code>Registry</code>](#Registry)  
<a name="Registry.modelDirs"></a>

### Registry.modelDirs
Define relative paths
to the model directory
starting by the repo
location.

**Kind**: static property of [<code>Registry</code>](#Registry)  
<a name="Registry.subscribeControllers"></a>

### Registry.subscribeControllers(server)
Registers Controllers

**Kind**: static method of [<code>Registry</code>](#Registry)  

| Param | Type | Description |
| --- | --- | --- |
| server | <code>Server</code> | HapiJS Server |

<a name="Registry.subscribePlugins"></a>

### Registry.subscribePlugins(server)
Registers Plugins

**Kind**: static method of [<code>Registry</code>](#Registry)  

| Param | Type | Description |
| --- | --- | --- |
| server | <code>Server</code> | HapiJS Server |

<a name="getEnv"></a>

## getEnv() ⇒ <code>String</code>
Grabs the environment from the
NODE_ENV environment variable.
Valid environments are:
 - production
 - development
 - test

Throws an error if environment
value is invalid.

**Kind**: global function  
**Returns**: <code>String</code> - name of environment  
<a name="getConfig"></a>

## getConfig(env)
Gets the configuration options
for the runtime environment.

**Kind**: global function  
**Uses**: getEnv()  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| env | <code>String</code> | <code>getEnv()</code> | name of environment |

