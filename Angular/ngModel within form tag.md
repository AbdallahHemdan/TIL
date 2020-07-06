# ngModel within form tag

> If ngModel is used within a form tag, either the **name attribute must be 
set** or **the form control must be defined as 'standalone' in ngModelOptions.**.


```html
<input [(ngModel)]="person.firstName" name="first" />

or

<input [(ngModel)]="person.firstName" [ngModelOptions]="{ standalone: true }" />
```
