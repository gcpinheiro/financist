import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

    @Output() acao = new EventEmitter();
    @Input() carregando = false;
    @Input() desabilitado = false;
    @Input() exibeEmBloco = false;
    @Input() tipo = 'primary';
    @Input() width = '';
    @Input() pathIcon = '';
    @Input() onlyIcon = false;
    @Input() notificacao = 0;

    constructor() {}

    ngOnInit(): void {}

    public disparaAcao(): void {
      if (!this.desabilitado) {
        this.acao.emit({});
      }
    }

    public get tema() {
      return {
        'botao-primario': this.tipo.toLowerCase() === 'primary',
        'botao-secundario': this.tipo.toLowerCase() === 'secondary',
        'botao-terciario': this.tipo.toLowerCase() === 'tertiary',
        'exibe-em-bloco': this.exibeEmBloco === true,
        notification: this.notificacao > 0,
      };
    }

    public get stateIcon() {
      return this.pathIcon != '' ? this.pathIcon : '';
    }

    public setWidth() {
      switch (this.width) {
        case 'medium':
          return '32px';

        case 'large':
          return '36px';

        default:
          return '';
      }
    }

    public get marginIcon() {
      return this.onlyIcon ? '0px' : '6px';
    }

    public get classContainer() {
      return this.onlyIcon ? 'only-icon' : 'container';
    }

}
