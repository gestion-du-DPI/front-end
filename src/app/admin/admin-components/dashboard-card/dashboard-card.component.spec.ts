import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './dashboard-card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent], // Using standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('p.font-semibold')
    ).nativeElement;
    expect(titleElement.textContent.trim()).toBe('Test Title');
  });

  it('should render the count', () => {
    component.count = 123;
    fixture.detectChanges();

    const countElement = fixture.debugElement.query(
      By.css('p.text-3xl')
    ).nativeElement;
    expect(countElement.textContent.trim()).toBe('123');
  });

  it('should apply the correct color class', () => {
    component.color = 'bg-secondary';
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(cardElement.classList).toContain('bg-secondary');
  });

  it('should render the correct icon', () => {
    component.icon = 'test-icon.png';
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(iconElement.getAttribute('src')).toBe('test-icon.png');
  });

  it('should have default inputs if none are provided', () => {
    expect(component.title).toBe('');
    expect(component.count).toBe(0);
    expect(component.color).toBe('bg-main');
    expect(component.icon).toBe('');
  });

  it('should render the default values properly', () => {
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('p.font-semibold')
    ).nativeElement;
    const countElement = fixture.debugElement.query(
      By.css('p.text-3xl')
    ).nativeElement;
    const cardElement = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(titleElement.textContent.trim()).toBe('');
    expect(countElement.textContent.trim()).toBe('0');
    expect(cardElement.classList).toContain('bg-main');
  });
});
