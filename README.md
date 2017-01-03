# lahacks2017-applications

## Navbar
For the applications portal, there are three main nav links: application, teams, and travel. This nav is wrapped in a header tag with the class "app-nav-group". Inside, there's a ul element with the class "nav-group"

```HTML
<header class="app-nav-group">
  <ul class="nav-group">
    ...
  </ul>
</header>
```

The part we can toggle is the list elements within the ul. We can add an "active" class to it and mark it as the currently active tab like this:

```HTML
<li class="nav-group-item"><a class="active" href="#">Application</a></li>
<li class="nav-group-item"><a class="" href="#">Team</a></li>
<li class="nav-group-item"><a class="" href="#">Travel</a></li>
```

## Progress bar
The progress bar is an svg divided into six different groups based on their colors along the bar. We have classes from "stage-1" to "stage-6" that can be added to color the blocks at the bottom.

```HTML
  <g class="stage-1">
    <g id="Block" transform="translate(0.000000, 110.000000)" fill="#737373">
        <g id="Group-2">
            <rect id="Rectangle" x="0.82" y="0.43956044" width="11.3492025" height="39.5574862" rx="5.67460123"></rect>
            <rect id="Rectangle" transform="translate(20.500000, 34.293974) rotate(90.000000) translate(-20.500000, -34.293974) " x="14.8253988" y="14.5152304" width="11.3492025" height="39.5574862" rx="5.67460123"></rect>
            <rect id="Rectangle" x="28.8307975" y="0.43956044" width="11.3492025" height="39.5574862" rx="5.67460123"></rect>
            <rect id="Rectangle" transform="translate(20.500000, 6.142634) rotate(90.000000) translate(-20.500000, -6.142634) " x="14.8253988" y="-13.6361095" width="11.3492025" height="39.5574862" rx="5.67460123"></rect>
        </g>
    </g>
    ...
  </g>
```

Each of these stages have block elements within them. So, as the applicant fills out the form, the "stage" classes should be added to indicate progress along the bar. We might need to add an id to each of these groups to identify them.

## Form Body
Within the form body, there are blocks of code for each of the different parts of the applications. So far, we only have the form questions for the application and team part. 

These questions are wrapped in a section with an id assocated with it like:

```HTML
<section id="app-main" class="app-main">
...
</section>
<section id="app-teams" class="app-main">
...
</section>
```

These sections will have to be toggled and show depending on which tab is active.
