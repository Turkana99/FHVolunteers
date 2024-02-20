import { Injectable } from '@angular/core';
    
@Injectable()
export class VolunteersService {
    getVolunteersData() {
        return [
            {
                id: 1,
                name: 'Məmmədova Aydan Elçin qızı',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Qadın',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Evli',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 2,
                name: 'Fərəcova Sevinc Orxan qızı',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Qadın',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Subay',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 3,
                name: 'Vəliyev Qurban Əli oğlu',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Kişi',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Subay',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 4,
                name: 'Quliyeva Sona Ruslan qızı',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Qadın',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Subay',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 5,
                name: 'Əliyev Orxan Ələsgər oğlu',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Kişi',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Evli',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 6,
                name: 'Əhmdova Fəridə Osman qızı',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Qadın',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Evli',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 7,
                name: 'Məmmədov Fuad Vüqar oğlu',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Kişi',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Evli',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 8,
                name: 'Əliyev Fərid Vəli oğlu',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Kişi',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Evli',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 9,
                name: 'Ələsgərova Hüsniyyə Fuad qızı',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Qadın',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Subay',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            },
            {
                id: 10,
                name: 'Qurbanov Ələkbər Əhməd oğlu',
                status: 'Fəaliyyəti dəvam edən',
                gender: 'Kişi',
                birthdate: '08.10.2002',
                fin: '18VHOST',
                maritalStatus: 'Subay',
                phone: '+99410 111 11 11',
                mail: 'test@gmail.com',
                startDate: '08.10.2002',
                enddate:''
            }
        ];
    }

    getVolunteers() {
        return Promise.resolve(this.getVolunteersData());
    }

};