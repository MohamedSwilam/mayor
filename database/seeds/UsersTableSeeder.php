<?php

use App\User;
use App\Account;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'first_name'        => 'Mohamed',
                'last_name'         => 'Swilam',
                'is_male'           => 1
            ],
            [
                'first_name'        => 'Hossam',
                'last_name'         => 'Mohamed',
                'is_male'           => 1
            ]
        ];

        $accounts = [
            [
                'email'             => 'mohamed_swilam@hotmail.com',
                'password'          => bcrypt('password'),
                'user_id'           => 1
            ],
            [
                'email'             => 'hossam_mohamed@hotmail.com',
                'password'          => bcrypt('password'),
                'user_id'           => 2
            ]
        ];

        foreach ($users as $user){
            $temp = User::create($user);
            $temp->assignRole('Super Admin');
        }

        foreach ($accounts as $account){
            Account::create($account);
        }
    }
}
