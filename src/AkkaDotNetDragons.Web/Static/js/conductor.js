﻿// -----------------------------------------------------------------------
// <copyright file="conductor.js">
//   Copyright (c) 2015 Akka.NET Dragons Demo contributors
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
// </copyright>
// -----------------------------------------------------------------------

require(['common.min'], function($common) {
    require(['conductorenv','material','skylo'], function($environment, $material, $skylo) {
        $.skylo({ initialBurst: 25, flat: true });
        $.skylo('start');
        $.material.init();
        $environment.getInstance().create();
    });
});