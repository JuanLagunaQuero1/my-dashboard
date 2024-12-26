import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value )
  }

  public toggleGrade() {
    switch (this.grade())
    {
      case ('A'):
        this.grade.set('B')
        return;
      case ('B'):
        this.grade.set('F')
        return;
      case ('F'):
        this.grade.set('A')
        return;
    }

  }

}
