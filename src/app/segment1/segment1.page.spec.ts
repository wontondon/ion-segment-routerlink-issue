import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Segment1Page } from './segment1.page';

describe('Segment1Page', () => {
  let component: Segment1Page;
  let fixture: ComponentFixture<Segment1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segment1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Segment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
