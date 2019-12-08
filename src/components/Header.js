import React from 'react'

export const Header = (props) => {
  return (
    <div class="pos-f-t rounded">
      <nav class="navbar mb-3 bg-sky navbar-dark rounded">
        <div class="mx-3">
          <div><a class="navbar-brand" href="/"><h1 class="mb-0 text-white">hawthorn.</h1></a></div>
          <small class="color-field">healing folks healing folks</small>
        </div>
        {/*  Commenting out navbar toggle button until launch of affinity groups
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        */}
      </nav>
      <div class="collapse navbar-light bg-light rounded" id="navbarToggle">
        <ul class="navbar-nav m-3">
          <li class="nav-item active ml-auto">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="/thread">Add a Thread</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
