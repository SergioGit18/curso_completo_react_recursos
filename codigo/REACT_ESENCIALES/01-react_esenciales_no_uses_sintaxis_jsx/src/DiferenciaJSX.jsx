// ------------------------------------------------------------

// Sintaxis JSX
<div id="content">
    <p>Hola mundo!!</p>
</div>

// ------------------------------------------------------------

// Sintaxis JavaScript Vanilla
React.createElement(
    'div',
    {id: 'content'},
    React.createElement(
        'p',
        null,
        'Hola mundo!!'
    )
);

// ------------------------------------------------------------