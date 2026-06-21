import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  name = signal('Nguyen Van A');
  count = signal(0);
  inputValue = signal('MindX School');
  handleClick() {
    this.name.update(name => name + ' Nguyen Van B');
    console.log(this.name());
  }
  handleIncCount() {
    this.count.update(count => count + 1);
  }
}
