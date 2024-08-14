(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93887],{39016:n=>{n.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TUI_DEFAULT_MATCHER, TuiLet, tuiPure} from '@taiga-ui/cdk';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiAvatar} from '@taiga-ui/kit';\nimport {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport type {Observable} from 'rxjs';\nimport {\n    combineLatest,\n    map,\n    merge,\n    of,\n    share,\n    startWith,\n    Subject,\n    switchMap,\n    tap,\n} from 'rxjs';\n\nclass User {\n    constructor(\n        public readonly firstName: string,\n        public readonly lastName: string,\n        public readonly phone: string,\n        public readonly avatarUrl: string | null = null,\n        public readonly disabled = false,\n    ) {}\n\n    public toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User(\n        'Roman',\n        'Sedov',\n        '+75678901234',\n        'https://avatars.githubusercontent.com/u/10106368',\n    ),\n    new User('Alex', 'Inkin', '+75678901234', assets`/images/avatar.jpg`),\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        TuiInputPhoneModule,\n        TuiLet,\n        AsyncPipe,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        NgIf,\n        TuiDataList,\n        NgForOf,\n        TuiAvatar,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly search$ = new Subject<string>();\n\n    private readonly selected$ = new Subject<User>();\n\n    protected value = '';\n\n    protected readonly user$ = merge(\n        this.selected$,\n        this.search$.pipe(\n            switchMap((value) =>\n                this.request(value).pipe(\n                    map((response) =>\n                        this.isFullMatch(response, value) ? response[0] : null,\n                    ),\n                ),\n            ),\n        ),\n    ).pipe(\n        tap((user) => {\n            if (user) {\n                this.value = user.phone;\n            }\n        }),\n    );\n\n    protected readonly items$ = this.search$.pipe(\n        startWith(''),\n        switchMap((value) =>\n            this.request(value).pipe(\n                map((response) => (this.isFullMatch(response, value) ? [] : response)),\n            ),\n        ),\n    );\n\n    protected readonly placeholder$ = combineLatest([this.user$, this.search$]).pipe(\n        map(([user, search]) => user || this.getPlaceholder(search)),\n        startWith('Phone number or name'),\n    );\n\n    protected onSearch(search: string): void {\n        this.search$.next(search);\n    }\n\n    protected onClick(user: User): void {\n        this.selected$.next(user);\n    }\n\n    // Request imitation\n    @tuiPure\n    private request(query: string): Observable<readonly User[]> {\n        return of(\n            DATA.filter(\n                (item) =>\n                    TUI_DEFAULT_MATCHER(item, query) ||\n                    TUI_DEFAULT_MATCHER(item.phone, query),\n            ),\n        ).pipe(share());\n    }\n\n    private getPlaceholder(search: string): string {\n        if (!search) {\n            return 'Phone number or name';\n        }\n\n        if (search.startsWith('+')) {\n            return 'Phone number';\n        }\n\n        return 'Name';\n    }\n\n    private isFullMatch(response: readonly User[], value: string): boolean {\n        return (\n            response.length === 1 &&\n            (String(response[0]) === value || response[0].phone === value)\n        );\n    }\n}\n"}}]);