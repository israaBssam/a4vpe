
import { CarouselModule } from 'primeng/carousel';
import { DialogService } from 'primeng/dynamicdialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

export const primeNgModules = [
    CarouselModule,
    DynamicDialogModule,
    ToastModule
]

export const primeServices = [
    DialogService,
MessageService,

]
